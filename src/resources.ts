import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logover from "./images/logover.png";
import gamifi from "./images/gamification.png"



export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  Logover: new ImageSource(logover),
  Gamific: new ImageSource(gamifi)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
