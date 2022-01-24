import { useEffect, useState } from "react";
import { IHousehold } from "../../../db/models/Household";
import {
  gender_choice,
  mother_tongues,
  residence_types,
} from "../../../enums";
import InputComponent from "./FormComponent/InputComponent";
import RadioComponent from "./FormComponent/RadioComponent";
import SelectComponent from "./FormComponent/SelectComponent";

export default function GharKoBiabarn(props: any) {
  let { bastis, wards, margas, hh, jaatis, jaati_samuhas, dharmas, errors } =
    props;
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
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "environment",
          },
        })
        .then((stream) => (video.srcObject = stream))
        .catch(console.error);

      let click_photo = document.querySelector(
        "#hoh_imageclick-photo"
      ) as HTMLButtonElement;

      video.style.display = "block";
      click_photo.style.display = "block";
      let existingImage = document.getElementById("imageDisplay");
      if (existingImage) {
        existingImage.style.display = "none";
      }
    }
  };

  const clickPhoto = async () => {
    let video = document.querySelector("#hoh_imagevideo") as HTMLVideoElement;
    let canvas = document.querySelector(
      "#hoh_imagecanvas"
    ) as HTMLCanvasElement;
    canvas!.getContext("2d").drawImage(video, 0, 0, video.width, video.height);
    let image_data_url = canvas.toDataURL("image/jpeg");
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
    let existingImage = document.getElementById("imageDisplay");
    if (existingImage) {
      existingImage.style.display = "none";
    }
    handleArrayChangeInHousehold("hoh_image", image_data_url);
  };

  const resetPhoto = async () => {
    let canvas = document.querySelector("#hoh_imagecanvas") as HTMLCanvasElement;
    let reset = document.querySelector("#hoh_imagereset-photo") as HTMLButtonElement;
    reset.style.display = "none";
    canvas.style.display = "none";
    let existingImage = document.getElementById("imageDisplay");
    if (existingImage) {
      existingImage.style.display = "none";
    }
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
          id="ward_id"
          handleChange={handleChange}
          defaultValue={household.ward_id}
          errors={errors}
        />

        <RadioComponent
          options={bastis}
          wrapperClass="options-verical"
          label={"2. टोलको नाम"}
          name="basti_id"
          handleChange={handleChange}
          defaultValue={household.basti_id}
          id={"basti_id"}
          errors={errors}
        />

        <RadioComponent
          options={margas}
          wrapperClass="options-verical"
          label={"3. मार्गको नाम"}
          name="marga_id"
          handleChange={handleChange}
          defaultValue={household.marga_id}
          id={"marga_id"}
          errors={errors}
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
          errors={errors}
        />

        <InputComponent
          name={"hoh_name"}
          label={"5. घरमुलीको नाम"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.hoh_name}
          palceholder={"घरमुलीको पुरा नाम (English)"}
          type={"text"}
          id={"hoh_name"}
          errors={errors}
        />
        <InputComponent
          name={"hoh_first_name"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.hoh_first_name}
          palceholder={"घरमुलीको नाम (नेपाली)"}
          type={"text"}
          id={"hoh_first_name"}
          errors={errors}
        />
        <InputComponent
          name={"hoh_last_name"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.hoh_last_name}
          palceholder={"घरमुलीको थर (नेपाली)"}
          type={"text"}
          id={"hoh_last_name"}
          errors={errors}
        />
        {/* 
        <RadioComponent
          options={hoh_roles}
          wrapperClass="options-verical"
          label={"6. घरमुली"}
          name="hoh_role"
          handleChange={handleChange}
          defaultValue={household.hoh_role}
          id={"hoh_role"}
          errors={errors}
        /> */}

        <RadioComponent
          options={gender_choice}
          wrapperClass="options-verical"
          label={"7. घरमुलीको लिंग"}
          name="hoh_gender"
          handleChange={handleChange}
          defaultValue={household.hoh_gender}
          id={"hoh_gender"}
          errors={errors}
        />
        <SelectComponent
          options={jaati_samuhas}
          wrapperClass="options-verical"
          label={"8. जातजाति समुह"}
          name="jaati_samuha_id"
          handleChange={handleChange}
          defaultValue={household.jaati_samuha_id}
          id={"jaati_samuha_id"}
          placeholder="जातजाति"
          errors={errors}
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
          errors={errors}
        />
        <SelectComponent
          options={dharmas}
          wrapperClass="options-verical"
          label={"9. धर्म"}
          name="religion_id"
          handleChange={handleChange}
          defaultValue={household.religion_id}
          id={"religion_id"}
          placeholder="धर्म"
          errors={errors}
        />

        <SelectComponent
          options={mother_tongues}
          wrapperClass="options-verical"
          label={"10. मातृभाषा"}
          name="mother_tongue_id"
          handleChange={handleChange}
          defaultValue={household.mother_tongue_id}
          id={"mother_tongue_id"}
          placeholder="मातृभाषा"
          errors={errors}
        />
        <InputComponent
          name={"num_of_member"}
          label={"11. परिवार संख्याः"}
          wrapperClass={"options-verical"}
          handleChange={handleChange}
          defaultValue={household.num_of_member}
          palceholder={"परिवार संख्याः"}
          type={"number"}
          id={"num_of_member"}
          errors={errors}
        />
      </div>

      <div className={`form-group`} id="5">
        <label className="label">12. घरमूलीको फोटोः</label>
        <div className="options-verical image-component">
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
            name="hoh_image"
            id="hoh_imageresponder_image"
            onChange={(e) => handleChange(e)}
          />
          {household.hoh_image && household.id && (
            <div id="imageDisplay">
              <img src={household.hoh_image} />
            </div>
          )}
          <button className="btn btn-secondary" onClick={getHohPhoto}>
            घरमूलीको फोटो {household.hoh_image && household.id && "Reset"}
          </button>
        </div>
        <label className="label" id="geo_code">
          13. घरको जियो कोड:
        </label>
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
        <RadioComponent
          options={residence_types}
          wrapperClass="options-verical"
          label={"14. बसोबासको प्रकार?"}
          name="resident_type"
          handleChange={handleChange}
          defaultValue={household.resident_type}
          id={"resident_type"}
          errors={errors}
        />

        {household.resident_type == "2" && (
          <div className="child-section">
            <InputComponent
              name={"migration_date"}
              label={"a. बसाई सरेको भए साल (वि.स.)"}
              wrapperClass={"options-verical"}
              handleChange={handleChange}
              defaultValue={household.migration_date}
              palceholder={"बसाई सरेको साल"}
              type={"text"}
              id={"migration_date"}
              errors={errors}
            />
          </div>
        )}
      </div>
    </>
  );
}
