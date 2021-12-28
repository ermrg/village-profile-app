import { useEffect, useState } from "react";
import { IBasti } from "../../../db/models/BastiModel";
import { IHousehold } from "../../../db/models/Household";
import { IMarga } from "../../../db/models/MargaModel";
import { IWard } from "../../../db/models/WardModel";
import { gender_choice, hoh_roles, mother_tongues } from "../../../enums";

let initialCoords = {
  latitude: 0,
  longitude: 0,
};

export default function GharKoBiabarn(props: any) {
  let { data, bastis, wards, margas, hh, jaatis, dharmas } = props;
  let { handleChange, handleArrayChangeInHousehold } = props;
  const [household, setHousehold] = useState({ ...hh } as IHousehold);

  useEffect(() => {
    setHousehold({ ...hh });
  }, [hh]);

  const checkRequired = (id: number) => {
    let requiredFields = data?.requiredFields || [];
    return requiredFields.indexOf(id) > -1;
  };

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
    let canvas = document.querySelector("#hoh_imagecanvas") as HTMLCanvasElement;
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
    let reset = document.querySelector("#hoh_imagereset-photo") as HTMLButtonElement;
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
      <div
        className={`form-group ${data && checkRequired(1) ? "required" : ""}`}
        id="1"
      >
        <label className="label">1. वडाको नाम</label>
        <div className="options-verical">
          {wards.map((w: IWard, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.ward_id == w.id.toString() ? (
                  <input
                    type="radio"
                    value={w.id}
                    name="ward_id"
                    defaultChecked
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <input
                    type="radio"
                    value={w.id}
                    name="ward_id"
                    onChange={(e) => handleChange(e)}
                  />
                )}
                {w.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(2) ? "required" : ""}`}
        id="2"
      >
        <label className="label">2. टोलको नाम</label>
        <div className="options-verical">
          {bastis.map((b: IBasti, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.basti_id == b.id.toString() ? (
                  <input
                    type="radio"
                    value={b.id}
                    name="basti_id"
                    defaultChecked
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <input
                    type="radio"
                    value={b.id}
                    name="basti_id"
                    onChange={(e) => handleChange(e)}
                  />
                )}
                {b.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(3) ? "required" : ""}`}
        id="3"
      >
        <label className="label">3. मार्गको नाम</label>
        <div className="options-verical">
          {margas.map((m: IMarga, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.marga_id == m.id.toString() ? (
                  <input
                    type="radio"
                    value={m.id}
                    name="marga_id"
                    defaultChecked
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <input
                    type="radio"
                    value={m.id}
                    name="marga_id"
                    onChange={(e) => handleChange(e)}
                  />
                )}
                {m.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(4) ? "required" : ""}`}
        id="4"
      >
        <label className="label">4. घर नं.</label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.house_num ?? ""}
            name="house_num"
          />
        </div>
        <label className="label">5. घरमुलीको नाम</label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.hoh_name ? household.hoh_name : ""}
            name="hoh_name"
          />
        </div>
        <label className="label">6. घरमुली</label>
        <div className="options-verical">
          {hoh_roles.map((m: any, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.hoh_role == m.value ? (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_role"
                    defaultChecked
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_role"
                    onChange={(e) => handleChange(e)}
                  />
                )}
                {m.label}
              </label>
            </div>
          ))}
        </div>
        <label className="label">7. घरमुलीको लिंग</label>
        <div className="options-verical">
          {gender_choice.map((m: any, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.hoh_gender == m.value ? (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_gender"
                    onChange={(e) => handleChange(e)}
                    defaultChecked
                  />
                ) : (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_gender"
                    onChange={(e) => handleChange(e)}
                  />
                )}
                {m.label}
              </label>
            </div>
          ))}
        </div>
        <label className="label">8. जाति</label>
        <div className="options-verical">
          <select
            className="form-control"
            name="jaati_id"
            required
            onChange={(e) => handleChange(e)}
            value={household.jaati_id ? household.jaati_id : ""}
          >
            <option value={""} key={"jaati-1"}>
              ------ जाति ------
            </option>
            {jaatis.map((d: any, key: any) => (
              <option value={d.id} key={"jaati" + key}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
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
              <option value={option.value} key={"relation_with_hoh" + key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(5) ? "required" : ""}`}
        id="5"
      >
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
          <>
            <label className="label">a. बसाई सरेको भए साल (वि.स.)</label>
            <div className="options-horizontal">
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                className="form-control"
                defaultValue={household.migration_date ?? ""}
                name="migration_date"
                placeholder="2067"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
