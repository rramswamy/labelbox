import * as React from "react";

import { 
    Button,
    Dialog,
    IconButton,
    Menu,
    MenuItem,
} from '@material-ui/core';
import { 
    Dashboard,
    Brightness6,
} from '@material-ui/icons';

import Image from './Image';



export function Toolbar({goHome, parsedData, isReview, isEditing, mountOutput, setImgSize, darkMode, toggleDark, flaggedCount, rejectedCount}) {
    const [layoutMenuOpen, setLayoutMenuOpen] = React.useState(false);
    const [referenceOpen, setReferenceOpen] = React.useState(false);

    function handleMenuClick(value){
        setLayoutMenuOpen(false);
        setImgSize(value);
    };

    return(
        <React.Fragment>
            <Dialog
                open={referenceOpen}
                onClose={() => setReferenceOpen(false)}
                maxWidth="lg"
            >
                <img style={{maxWidth: "100%", height: "auto", margin: "auto"}} src={parsedData.referenceImage} alt="reference"/>
            </Dialog>
            <div id="toolbarWrapper">

                    {
                        parsedData.referenceImage &&
                        <Image
                            id='reference-image'
                            alt='reference image'
                            src={parsedData.referenceImage}
                            onClick={() => setReferenceOpen(true)}
                        />
                    }
                <div id="toolbarInstructions">
                    {parsedData.instructions}
                    <div style={{fontSize: "12px"}}><center>
                        {rejectedCount + " rejected - "
                        + flaggedCount + " flagged - "
                        + (parsedData.data.length - rejectedCount - flaggedCount) + " remaining"}
                    </center></div>
                </div>
                <div id="toolbarSettingsWrapper">
                  <div id="home">
                    <p 
                    style={{color: "#9b9b9b", cursor: "pointer"}}
                    onClick={() => goHome()}
                    >Home</p>
                    </div>
                <IconButton 
                    onClick={() => toggleDark()}
                    style={darkMode ? {color: "#edeffb"} : {}}
                >
                    <Brightness6 variant="contained"/>
                </IconButton>
                <IconButton 
                    id="layoutMenu" 
                    onClick={() => setLayoutMenuOpen(true)}
                    style={darkMode ? {color: "#edeffb"} : {}}
                >
                    <Dashboard/>
                </IconButton>
                <Menu
                    open={layoutMenuOpen}
                    onClose={() => setLayoutMenuOpen(false)}
                    anchorEl={document.getElementById("layoutMenu")}
                >
                    <MenuItem onClick={() => handleMenuClick("small")}>Small</MenuItem>
                    <MenuItem onClick={() => handleMenuClick("medium")}>Medium</MenuItem>
                    <MenuItem onClick={() => handleMenuClick("large")}>Large</MenuItem>
                </Menu>
                </div>
                <div id="toolbarButtonWrapper">
                    <Button
                        id="skip"
                        style={darkMode ? {color: "#edeffb", marginRight: "15px"} : {marginRight: "15px"}}
                        disabled={isReview}
                        onClick={() =>
                            window.Labelbox.skip().then(() => {
                                if (!parsedData.label) window.Labelbox.fetchNextAssetToLabel();
                            })
                        }
                    >
                        Skip
                    </Button>

                    <Button
                        id="submit"
                        color={darkMode ? "disabled" : "primary"}
                        variant="contained"
                        disabled={isReview}
                        onClick={() => 
                            window.Labelbox.setLabelForAsset(mountOutput())
                            .then(() => {
                                if (!parsedData.label) window.Labelbox.fetchNextAssetToLabel();
                            })
                        }
                    >
                        {isEditing ? 'Save' : 'Submit'}
                    </Button>
                </div>
            
            </div>
        </React.Fragment>
    )
}
