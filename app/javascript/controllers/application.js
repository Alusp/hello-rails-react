// Application development experience
import { Application } from "@hotwired/stimulus";
// Configure Stimulus development experience
const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
