import { useEffect, useState } from "react";
import { IBasti } from "../../../db/models/BastiModel";
import { IHousehold } from "../../../db/models/Household";
import { IMarga } from "../../../db/models/MargaModel";
import { gender_choice, hoh_roles, mother_tongues } from "../../../enums";
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

        
        <label className="label">9. धर्म</label>
        <div className="options-verical">
          <select
            className="form-control"
            name="religion_id"
            required
            value={household.religion_id ? household.religion_id : ""}
            onChange={(e) => handleChange(e)}
          >
            <option value={""} key={"religion-1"}>
              ------ धर्म ------
            </option>
            {dharmas.map((d: any, key: any) => (
              <option value={d.id} key={"religion" + key}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <label className="label">10. मातृभाषा:</label>
        <div className="options-verical">
          <select
            className="form-control"
            value={
              household.mother_tongue_id
                ? household.mother_tongue_id.toString()
                : ""
            }
            name="mother_tongue_id"
            onChange={(e) => handleChange(e)}
          >
            <option value={""} key={"मातृभाषा-1"}>
              ------ मातृभाषा ------
            </option>
            {mother_tongues.map((option, key) => (
              <option value={option.id} key={"relation_with_hoh" + key}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`form-group`} id="5">
        <label className="label">11. परिवार संख्याः</label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            defaultValue={household.num_of_member ?? ""}
            name="num_of_member"
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
      </div>
    </>
  );
}
