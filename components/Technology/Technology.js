// import Image from "next/image";
import "./Technology.css";

const Technology = () => {
  return (
    <>
      <h3 className="we-offer">We offer high demand services</h3>
      <section className="technology-section">
        <div>
          <div className="icon desing-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </div>
          <h4>UI/UX Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button>Get started</button>
        </div>

        <div>
          <div className="icon frontend-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-code"
              viewBox="0 0 16 16"
            >
              <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
            </svg>
          </div>
          <h4>Front End</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button id="button-blue">Get started</button>
        </div>

        <div>
          <div className="icon backend-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-database-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z" />
              <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
              <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
              <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
            </svg>
          </div>
          <h4>Back End</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button>Get started</button>
        </div>
      </section>
    </>
  );
};

export default Technology;
