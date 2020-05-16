import React from 'react';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export default function ImageUpload() {

  const checkUploadResult = (resultEvent) => {
      console.log(resultEvent)
        if(resultEvent.event === "success"){
            


            this.props.postPhoto({user_id: this.props.currentUser.id,
            caption:'',
        url: resultEvent.info.secure_url})
        .then(this.props.history.push('/profile'))
        }
    }

   const showWidget = (widget) => {
        widget.open()
    }

        let widget = window.cloudinary.createUploadWidget({
            cloudName: "amzap",
            uploadPreset:"ylmdvnpt",
        },
            (error, result) => { checkUploadResult(result) })
        
    
    return (
        <div id='photo-form-container'>
            <button onClick={() =>  showWidget(widget)}>Upload Photo</button>
        </div>
        )
        }

