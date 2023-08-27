// Import our custom CSS
import "./scss/styles.scss";
import skillData from "./skillData";
import * as bootstrap from "bootstrap";

const accordion = document.getElementById("skillList") as HTMLDivElement;

for (const skill of skillData) {
  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";
  const accordionHeader = document.createElement("h2");
  accordionHeader.className = "accordion-header";
  accordionHeader.id = "header" + skill.id.toString();
  const accordionButton = document.createElement("button");
  accordionButton.className = "accordion-button collapsed d-flex";
  accordionButton.type = "button";
  accordionButton.setAttribute("data-bs-toggle", "collapse");
  accordionButton.setAttribute("aria-expanded", "false");
  accordionButton.setAttribute(
    "aria-controls",
    "content" + skill.id.toString()
  );
  accordionButton.setAttribute(
    "data-bs-target",
    "#content" + skill.id.toString()
  );

  accordionButton.innerHTML = `<img src="/skillicons/${skill.id}.icon.png" class="me-2" /> ${skill.name}`;
  accordionHeader.appendChild(accordionButton);

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-collapse collapse";
  accordionContent.setAttribute("aria-labelledby", accordionHeader.id);
  accordionContent.id = "content" + skill.id.toString();

  const accordionBody = document.createElement("div");
  accordionBody.className =
    "accordion-body d-flex justify-content-around align-items-center flex-wrap";

  accordionBody.innerHTML = `<div>
    <strong>MSEA</strong>
    <br />
    <video src="${skill.mseaVideoUrl}" loop autoplay height=300 />
    </div>
    <div>
    <strong>KMS</strong>
    <br />
    <video src="${skill.kmsVideoUrl}" loop autoplay height=300 />
    </div>
    `;

  accordionContent.appendChild(accordionBody);

  accordionItem.append(accordionHeader, accordionContent);
  accordion.appendChild(accordionItem);
}
