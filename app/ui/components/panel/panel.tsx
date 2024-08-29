import "./panel.css";
import Subtitle from "@/app/ui/components/subtitle";

const panels = [
  {
    title: "365",
    subtitle: "Days a year",
  },
  {
    title: "7am - 9pm",
    subtitle: "Business Hours",
  },
  {
    title: "28",
    subtitle: "Acre Farm",
  },
];

export default function Panel() {
  return (
    <>
      <div className="panels container mx-auto bottom-0 md:bottom-14">
        <div className="grid grid-cols-3 gap-3">
          {panels.map(({ title, subtitle }, i) => {
            return (
              <div key={`${title}_${i}`} className="panel text-center">
                <Subtitle className="mb-3">{title}</Subtitle>
                <h6 className="font-medium">{subtitle}</h6>
              </div>
            );
          })}
        </div>
      </div>
      {/* Background Curve */}
      <svg
        className="curve"
        viewBox="0 0 1440 225"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-6.55651e-06 224.823C-6.55651e-06 224.823 -20.1572 196.416 72.8402 137.815C165.838 79.214 320 96.523 480 96.823C640 96.523 940.117 96.823 960 96.823C979.883 96.823 1137.85 89.6517 1261.42 85.8299C1384.99 82.0081 1440 0.822992 1440 0.822992V224.823H1360C1280 224.823 1120 224.823 960 224.823C800 224.823 640 224.823 480 224.823C320 224.823 160 224.823 80 224.823H-6.55651e-06Z"
          fill="white"
        />
      </svg>
    </>
  );
}
