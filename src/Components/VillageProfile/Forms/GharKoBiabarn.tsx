import { useEffect, useState } from "react";
import { IBasti } from "../../../db/models/BastiModel";
import { IHousehold } from "../../../db/models/Household";
import { IMarga } from "../../../db/models/MargaModel";
import { gender_choice, hoh_roles, land_types, mother_tongues, residentTypes } from "../../../enums";
import InputComponent from "./FormComponent/InputComponent";
import RadioComponent from "./FormComponent/RadioComponent";
import SelectComponent from "./FormComponent/SelectComponent";

export default function GharKoBiabarn(props: any) {
  let { bastis, wards, margas, hh, jaatis, dharmas } = props;
  let { handleChange, handleArrayChangeInHousehold } = props;
  const [household, setHousehold] = useState({ ...hh } as IHousehold);

  useEffect(() => {
    setHousehold({ ...hh });
  }, [hh]);

  const checkGeoLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (positions: any) => {
        handleArrayChangeInHousehold("latitude", positions.coords.latitude);
        handleArrayChangeInHousehold("longitude", positions.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getHohPhoto = async () => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      let video = document.querySelector("#hoh_imagevideo") as HTMLVideoElement;
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      video!.srcObject = stream;

      let click_photo = document.querySelector(
        "#hoh_imageclick-photo"
      ) as HTMLButtonElement;

      video.style.display = "block";
      click_photo.style.display = "block";
    }
  };

  const clickPhoto = async () => {
    let video = document.querySelector("#hoh_imagevideo") as HTMLVideoElement;
    let canvas = document.querySelector(
      "#hoh_imagecanvas"
    ) as HTMLCanvasElement;
    canvas!
      .getContext("2d")
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL("image/jpeg");
    console.log(image_data_url);
    video.style.display = "none";
    canvas.style.display = "block";
    let click_photo = document.querySelector(
      "#hoh_imageclick-photo"
    ) as HTMLButtonElement;
    let reset = document.querySelector(
      "#hoh_imagereset-photo"
    ) as HTMLButtonElement;
    click_photo.style.display = "none";
    reset.style.display = "block";
    handleArrayChangeInHousehold("hoh_image", image_data_url);
  };

  const resetPhoto = async () => {
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    let reset = document.querySelector("#reset-photo") as HTMLButtonElement;
    reset.style.display = "none";
    canvas.style.display = "none";
    getHohPhoto();
  };
  return (
    <>
      <div className={`form-group`} id="1">
        <RadioComponent
          options={wards}
          wrapperClass="options-verical"
          label={"1. वडाको नाम"}
          name="ward_id"
          handleChange={handleChange}
          defaultValue={household.ward_id}
        />

        <RadioComponent
          options={bastis}
          wrapperClass="options-verical"
          label={"2. टोलको नाम"}
          name="basti_id"
          handleChange={handleChange}
          defaultValue={household.basti_id}
          id={"basti_id"}
        />

        <RadioComponent
          options={margas}
          wrapperClass="options-verical"
          label={"3. मार्गको नाम"}
          name="marga_id"
          handleChange={handleChange}
          defaultValue={household.marga_id}
          id={"marga_id"}
        />
      </div>

      <div className={`form-group`} id="2">
        <InputComponent
          name={"house_num"}
          label={"4. घर नं."}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.house_num}
          palceholder={"घर नं"}
          type={"text"}
          id={"house_num"}
        />

        <InputComponent
          name={"hoh_name"}
          label={"5. घरमुलीको नाम"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.hoh_name}
          palceholder={"घरमुलीको नाम"}
          type={"text"}
          id={"hoh_name"}
        />

        <RadioComponent
          options={hoh_roles}
          wrapperClass="options-verical"
          label={"6. घरमुली"}
          name="hoh_role"
          handleChange={handleChange}
          defaultValue={household.hoh_role}
          id={"hoh_role"}
        />

        <RadioComponent
          options={gender_choice}
          wrapperClass="options-verical"
          label={"7. घरमुलीको लिंग"}
          name="hoh_gender"
          handleChange={handleChange}
          defaultValue={household.hoh_gender}
          id={"hoh_gender"}
        />
        <SelectComponent
          options={jaatis}
          wrapperClass="options-verical"
          label={"8. जाति"}
          name="jaati_id"
          handleChange={handleChange}
          defaultValue={household.jaati_id}
          id={"jaati_id"}
          placeholder="जाति"
        />

        <SelectComponent
          options={dharmas}
          wrapperClass="options-verical"
          label={"9. धर्म"}
          name="religion_id"
          handleChange={handleChange}
          defaultValue={household.religion_id}
          id={"jaati_id"}
          placeholder="धर्म"
        />
        <SelectComponent
          options={mother_tongues}
          wrapperClass="options-verical"
          label={"10. मातृभाषा"}
          name="religion_id"
          handleChange={handleChange}
          defaultValue={household.mother_tongue_id}
          id={"mother_tongue_id"}
          placeholder="मातृभाषा"
        />
        <InputComponent
          name={"num_of_member"}
          label={"11. परिवार संख्याः"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.num_of_member}
          palceholder={"घरमुलीको नाम"}
          type={"text"}
          id={"num_of_member"}
        />
        <RadioComponent
          options={residentTypes}
          wrapperClass="options-verical"
          label={"14. बसोबासको प्रकार?"}
          name="resident_typer"
          handleChange={handleChange}
          defaultValue={household.resident_type}
          id={"resident_type"}
        />
        

        <InputComponent
          name={"num_of_member"}
          label={"a. बसाई सरेको भए साल (वि.स.)"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.migration_date}
          palceholder={"Ex: 2067"}
          type={"text"}
          id={"migration_date"}
        />

        



        
        

        
      </div>

     
        <label className="label">12. घरमूलीको फोटोः</label>
        <div className="options-verical">
          <video
            id="hoh_imagevideo"
            width="320"
            height="240"
            autoPlay
            style={{ display: "none" }}
          ></video>

          <canvas
            id="hoh_imagecanvas"
            width="320"
            height="240"
            style={{ display: "none" }}
          ></canvas>
          <button
            id="hoh_imageclick-photo"
            className="btn btn-sm btn-success"
            onClick={clickPhoto}
            style={{ display: "none" }}
          >
            Click Photo
          </button>
          <button
            id="hoh_imagereset-photo"
            className="btn btn-sm btn-danger"
            onClick={resetPhoto}
            style={{ display: "none" }}
          >
            Reset
          </button>
          <input
            type="hidden"
            name="responder_image"
            id="hoh_imageresponder_image"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-secondary" onClick={getHohPhoto}>
            घरमूलीको फोटो
          </button>
        </div>
        <label className="label">13. घरको जियो कोड:</label>
        <div className="options-verical">
          {parseFloat(household.latitude) > 0 &&
          parseFloat(household.longitude) > 0 ? (
            <>
              <input
                onChange={null}
                type="number"
                className="form-control geo-field-add-lat"
                value={household.latitude}
                name="latitude"
              />
              <input
                onChange={null}
                type="number"
                className="form-control geo-field-add-long"
                value={household.longitude}
                name="longitude"
              />
            </>
          ) : (
            <>
              <input
                onChange={null}
                type="text"
                className="form-control geo-field-add-lat"
                defaultValue={household.latitude}
                name="latitude"
              />
              <input
                onChange={null}
                type="text"
                className="form-control geo-field-add-long"
                defaultValue={household.longitude}
                name="longitude"
              />
            </>
          )}
          <button className="btn btn-secondary" onClick={checkGeoLocation}>
            घरको जियो कोड
          </button>
        </div>
        <label className="label">14. बसोबासको प्रकार?</label>
        <div className="options-vertical">
          <div className="radio" key={"बसोबासको प्रकार1"}>
            <label>
              <input
                type="radio"
                value={"1"}
                name="resident_type"
                checked={household.resident_type == "1"}
                onChange={(e) => handleChange(e)}
              />
              जन्मसिद्ध
            </label>
          </div>

          <div className="radio" key={"बसोबासको प्रकार2"}>
            <label>
              <input
                type="radio"
                value={"2"}
                name="resident_type"
                checked={household.resident_type == "2"}
                onChange={(e) => handleChange(e)}
              />
              बसाईसराई
            </label>
          </div>
        </div>

        {household.resident_type == "2" && (
          <div className="child-section">
            <label className="label">a. बसाई सरेको भए साल (वि.स.)</label>
            <div className="options-horizontal">
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                className="form-control"
                defaultValue={household.migration_date ?? ""}
                name="migration_date"
                placeholder="Ex: 2067"
              />
            </div>
          </div>
        )}
      
    </>
  );
}
