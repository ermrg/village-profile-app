import { useState } from "react";
import { IBasti } from "../../../db/models/BastiModel";
import { IMarga } from "../../../db/models/MargaModel";
import { IWard } from "../../../db/models/WardModel";
import { gender_choice, hoh_roles } from "../../../enums";

let initialCoords = {
  latitude: 0,
  longitude: 0,
};
export default function GharKoBiabarn(props: any) {
  let { data, bastis, wards, margas, household, jaatis, dharmas } = props;
  let { handleChange } = props;
  const [geoLocation, setGeoLocation] = useState({ ...initialCoords } as any);

  const checkRequired = (id: number) => {
    let requiredFields = data?.requiredFields || [];
    return requiredFields.indexOf(id) > -1;
  };

  const checkGeoLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (positions: any) => {
        console.log(positions);
        setGeoLocation((geoLocation: any) => ({
          ...geoLocation,
          latitude: positions.coords.latitude,
          longitude: positions.coords.longitude,
        }));
        let lat = document.querySelector(
          ".geo-field-add-lat"
        ) as HTMLInputElement;
        let longi = document.querySelector(
          ".geo-field-add-long"
        ) as HTMLInputElement;
        lat.value = positions.coords.latitude;
        longi.value = positions.coords.longitude;
        const event = new Event("input", { bubbles: false });
        // const event2 = new Event("input", { bubbles: false });
        lat.dispatchEvent(event);
        await handleChange(event);
        longi.dispatchEvent(event);
        await handleChange(event);
        // console.log(event2);
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
      let video = document.querySelector("#video") as HTMLVideoElement;
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      video!.srcObject = stream;

      let click_photo = document.querySelector(
        "#click-photo"
      ) as HTMLButtonElement;

      video.style.display = "block";
      click_photo.style.display = "block";
    }
  };

  const clickPhoto = async () => {
    let video = document.querySelector("#video") as HTMLVideoElement;
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    canvas!
      .getContext("2d")
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL("image/jpeg");
    console.log(image_data_url);
    video.style.display = "none";
    canvas.style.display = "block";
    let click_photo = document.querySelector(
      "#click-photo"
    ) as HTMLButtonElement;
    let reset = document.querySelector("#reset-photo") as HTMLButtonElement;
    click_photo.style.display = "none";
    reset.style.display = "block";

    let responder_image_input = document.getElementById(
      "responder_image"
    ) as HTMLInputElement;
    responder_image_input.value = image_data_url;
    const event = new Event("input", { bubbles: false });
    responder_image_input.dispatchEvent(event);
    await handleChange(event);
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
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {wards.map((w: IWard, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.ward_id == w.id ? (
                  <input
                    type="radio"
                    value={w.id}
                    name="ward_id"
                    defaultChecked
                  />
                ) : (
                  <input type="radio" value={w.id} name="ward_id" />
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
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {bastis.map((b: IBasti, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.basti_id == b.id ? (
                  <input
                    type="radio"
                    value={b.id}
                    name="basti_id"
                    defaultChecked
                  />
                ) : (
                  <input type="radio" value={b.id} name="basti_id" />
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
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {margas.map((m: IMarga, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.marga_id == m.id ? (
                  <input
                    type="radio"
                    value={m.id}
                    name="marga_id"
                    defaultChecked
                  />
                ) : (
                  <input type="radio" value={m.id} name="marga_id" />
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
            value={household.house_no ?? ""}
            name="house_no"
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
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {hoh_roles.map((m: any, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.hoh_role == m.value ? (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_role"
                    defaultChecked
                  />
                ) : (
                  <input type="radio" value={m.value} name="hoh_role" />
                )}
                {m.key}
              </label>
            </div>
          ))}
        </div>
        <label className="label">7. घरमुलीको लिंग</label>
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {gender_choice.map((m: any, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.hoh_role == m.value ? (
                  <input
                    type="radio"
                    value={m.value}
                    name="hoh_gender"
                    defaultChecked
                  />
                ) : (
                  <input type="radio" value={m.value} name="hoh_gender" />
                )}
                {m.key}
              </label>
            </div>
          ))}
        </div>
        <label className="label">8. जाति</label>
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          <select className="form-control" name="jaati_id" required>
            <option value={""} key={"-1"} selected>
              ------ जाति ------
            </option>
            {jaatis.map((d: any, key: any) =>
              household.jaati_id == d.id ? (
                <option value={d.id} key={key} selected>
                  {d.name}
                </option>
              ) : (
                <option value={d.id} key={key}>
                  {d.name}
                </option>
              )
            )}
          </select>
        </div>
        <label className="label">9. धर्म</label>
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          <select className="form-control" name="religion_id" required>
            <option value={""} key={"-1"} selected>
              ------ धर्म ------
            </option>
            {dharmas.map((d: any, key: any) =>
              household.religion_id == d.id ? (
                <option value={d.id} key={key} selected>
                  {d.name}
                </option>
              ) : (
                <option value={d.id} key={key}>
                  {d.name}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(5) ? "required" : ""}`}
        id="5"
      >
        <label className="label">10. परिवार संख्याः</label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            value={household.num_of_member ?? ""}
            name="num_of_member"
          />
        </div>
        <label className="label">11. घरमूलीको फोटोः</label>
        <div className="options-verical">
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            style={{ display: "none" }}
          ></video>

          <canvas
            id="canvas"
            width="320"
            height="240"
            style={{ display: "none" }}
          ></canvas>
          <button
            id="click-photo"
            className="btn btn-sm btn-success"
            onClick={clickPhoto}
            style={{ display: "none" }}
          >
            Click Photo
          </button>
          <button
            id="reset-photo"
            className="btn btn-sm btn-danger"
            onClick={resetPhoto}
            style={{ display: "none" }}
          >
            Reset
          </button>
          <input
            type="hidden"
            name="responder_image"
            id="responder_image"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-secondary" onClick={getHohPhoto}>
            घरमूलीको फोटो
          </button>
        </div>
        <label className="label">12. घरको जियो कोड:</label>
        <div className="options-verical">
          {parseFloat(household.latitude) > 0 &&
          parseFloat(household.longitude) > 0 ? (
            <>
              <input
                // onChange={(e) => handleChange(e)}
                type="number"
                className="form-control geo-field-add-lat"
                value={household.latitude}
                name="latitude"
              />
              <input
                // onChange={(e) => handleChange(e)}
                type="number"
                className="form-control geo-field-add-long"
                value={household.longitude}
                name="longitude"
              />
            </>
          ) : (
            <>
              <input
                // onChange={(e) => handleChange(e)}
                type="text"
                className="form-control geo-field-add-lat"
                value={geoLocation.latitude}
                name="latitude"
              />
              <input
                // onChange={(e) => handleChange(e)}
                type="text"
                className="form-control geo-field-add-long"
                value={geoLocation.longitude}
                name="longitude"
              />
            </>
          )}
          <button className="btn btn-secondary" onClick={checkGeoLocation}>
            घरको जियो कोड
          </button>
        </div>
      </div>
    </>
  );
}
