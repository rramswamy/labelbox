import React, { useState, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

import "./App.css";
import Image from './components/Image';
import JsonUtils from './utils/Json.utils';


import {Toolbar} from './components/Toolbar';
//import asset from './data.json' //temp asset to run local


const ImagesWrapper = styled.div`
    padding: 5px;
    display: flex;
    flex-wrap: wrap;

    div.image-wrapper {
        height: auto;
        width: 100%;
        margin: auto 5px;
        display: inline-block;
    }
`;

// Map through images, and create image components for each
const renderImages = ({
    images,
    rejectedImages,
    flaggedImages,
    toggleRejected,
    toggleFlagged,
    isReview,
    imgSize,
}) => {
    return images.map(imageData => {
        // Make sure the image formatting is valid
        if(!imageData || !imageData.externalId || !imageData.imageUrl) return (
            <div>
                Error: invalid image {JSON.stringify(imageData)} requires id and imageUrl
            </div>
        );

        const rejected = rejectedImages.some(({ externalId }) => imageData.externalId === externalId);
        const flagged = flaggedImages.some(({ externalId }) => imageData.externalId === externalId)

        if(imageData.status){
            if(imageData.status === "flagged"){
                toggleFlagged(imageData)
            }
            else if(imageData.status === "rejected"){
                toggleRejected(imageData)
            }
        }

        function handleImageClick(e, imageData){
            if(e.altKey === true){
                toggleFlagged(imageData);
            } else{
                toggleRejected(imageData);
            }
        }

        return (
            <Image
                pointer={!isReview}
                key={imageData.externalId}
                id={imageData.externalId}
                alt={imageData.externalId}
                src={imageData.imageUrl}
                onClick={(e) => isReview ? null : handleImageClick(e, imageData)}
                rejected={rejected}
                flagged={flagged}
                imgSize={imgSize}
            />
        )
    })
};

const App = () => {
 
    const [asset, setAsset] = useState(null);
    const [rejectedImages, setRejectedImages] = useState([]);
    const [flaggedImages, setFlaggedImages] = useState([]);
    const [isReview, setIsReview] = useState(false);
    const [imgSize, setImgSize] = useState("small");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(window.top !== window.self) setIsReview(true);
    }, []);
    
    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");
    
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = darkMode ? "/css/appDark.css" : "/css/appLight.css";
    
        head.appendChild(link);
    
        return () => { head.removeChild(link); }
    
      }, [darkMode]);

    useEffect(() => {

        const _handleNewAsset = emittedAsset => {
        if (!emittedAsset) return;
        
        const assetIsNew = !asset || emittedAsset.id !== asset.id;
        const assetHasMoreInfo = 
        asset
        && (
            asset.previous !== emittedAsset.previous
            || asset.next !== emittedAsset.next
        );
        
        if (assetIsNew || assetHasMoreInfo) {
            let { label } = emittedAsset;
            const allLabels = JsonUtils.dp(label);
            const flaggedLabels = [];
            const rejectedLabels = [];
            allLabels.forEach((label) => {
                if(label.status === "flagged"){
                    flaggedLabels.push(label);
                }
                else if(label.status === "rejected"){
                    rejectedLabels.push(label);
                }
            })
            setAsset(emittedAsset);
            setFlaggedImages(flaggedLabels);
            setRejectedImages(rejectedLabels);
       
        }

        };
    

    const subscription = window.Labelbox.currentAsset().subscribe(_handleNewAsset);
    return () => subscription.unsubscribe();
  }, [asset])
  

    function mountOutput(){
        const selectedImages = []
        if(rejectedImages.length > 0){
            for (let i = 0; i < rejectedImages.length; i++) {
                const rejectedImage = {...rejectedImages[i]}
                rejectedImage.status = "rejected"
                selectedImages.push(rejectedImage)

            }
        }
        if(flaggedImages.length > 0){
            for (let i = 0; i < flaggedImages.length; i++) {
                const flaggedImage = {...flaggedImages[i]}
                flaggedImage.status = "flagged"
                selectedImages.push(flaggedImage)
            }
        }
        return JsonUtils.ds(selectedImages);
    }


    function toggleRejected(imageData){
        let newRejectedImages = [...rejectedImages];
        let newFlaggedImages = [...flaggedImages];

        if(!rejectedImages.some(({ externalId }) => externalId === imageData.externalId)) {
            newRejectedImages.push(imageData);  
        }
        else {
            const index = rejectedImages.findIndex(({ externalId }) => externalId === imageData.externalId);
            newRejectedImages.splice(index, 1);
        }

        // If image is already flagged, clear the flag
        if(flaggedImages.some(({ externalId }) => externalId === imageData.externalId)) {
            const index = flaggedImages.findIndex(({ externalId }) => externalId === imageData.externalId);
            newFlaggedImages.splice(index, 1);
            setFlaggedImages(newFlaggedImages);
        }
        
        setRejectedImages(newRejectedImages);
    }

    function toggleFlagged(imageData){
        let newFlaggedImages = [...flaggedImages];
        let newRejectedImages = [...rejectedImages];

        if(!flaggedImages.some(({ externalId }) => externalId === imageData.externalId)) {
            newFlaggedImages.push(imageData);  
        }
        else {
            const index = flaggedImages.findIndex(({ externalId }) => externalId === imageData.externalId);
            newFlaggedImages.splice(index, 1);
        }

        // If image is already rejected, clear the selection
        if(rejectedImages.some(({ externalId }) => externalId === imageData.externalId)) {
            const index = rejectedImages.findIndex(({ externalId }) => externalId === imageData.externalId);
            newRejectedImages.splice(index, 1);
            setRejectedImages(newRejectedImages);
        }

        setFlaggedImages(newFlaggedImages);
    }
  
    if (!asset) {
        return <LinearProgress />;
    }

    const isEditing = !!asset.createdAt;

    return (
        <div>

            <Toolbar
                parsedData={asset}
                isReview={isReview}
                isEditing={isEditing}
                mountOutput={mountOutput}
                setImgSize={setImgSize}
                darkMode={darkMode}
                toggleDark={() => setDarkMode(!darkMode)}
                flaggedCount={flaggedImages.length}
                rejectedCount={rejectedImages.length}
   
        
            />
            <ImagesWrapper hasReferenceImage={!!asset.referenceImage}>
                {renderImages({
                toggleRejected,
                toggleFlagged,
                rejectedImages,
                flaggedImages,
                images: asset.data,
                isReview,
                imgSize: imgSize,
                })}
            </ImagesWrapper>
        </div>
    );
}

export default App;
