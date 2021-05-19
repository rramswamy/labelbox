import * as React from "react";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

import "./App.css";
import Image from './components/Image';
import JsonUtils from './utils/Json.utils';

import {Toolbar} from './components/Toolbar';

import asset from './data.json' //temp asset to run local

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
  
    //const [asset, setAsset] = useState(null);
    const [rejectedImages, setRejectedImages] = React.useState([]);
    const [flaggedImages, setFlaggedImages] = React.useState([]);
    const [isReview, setIsReview] = React.useState(false);
    const [imgSize, setImgSize] = React.useState("small");
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        if(window.top !== window.self) setIsReview(true);
    }, []);
    
    React.useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");
    
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = darkMode ? "/css/appDark.css" : "/css/appLight.css";
    
        head.appendChild(link);
    
        return () => { head.removeChild(link); }
    
      }, [darkMode]);
    /*
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
            try {
            let { label } = emittedAsset;
            setRejectedImages(JsonUtils.dp(label));
            } catch(err) {
            setRejectedImages([]);
            }
            setAsset(emittedAsset);
        }
        };

        const subscription = window.Labelbox.currentAsset().subscribe(_handleNewAsset);
        return () => subscription.unsubscribe();
    }, [asset])
    */

    function mountOutput(){
        const output = {
            label: rejectedImages,
        }
    
        if(parsedData.externalId) output.externalId = parsedData.externalId;
        if(parsedData.referenceImage) output.referenceImage = parsedData.referenceImage;
    
        return JsonUtils.ds(rejectedImages);
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
 
    const parsedData = asset;
    if (!parsedData || !parsedData.instructions || !parsedData.data) {
        return (
        <div>
            Error: Input data {asset.data} does not include instructions and data fields.
        </div>
        );
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
            <ImagesWrapper hasReferenceImage={!!parsedData.referenceImage}>
                {renderImages({
                toggleRejected,
                toggleFlagged,
                rejectedImages,
                flaggedImages,
                images: parsedData.data,
                isReview,
                imgSize: imgSize,
                })}
            </ImagesWrapper>
        </div>
    );
}

export default App;
