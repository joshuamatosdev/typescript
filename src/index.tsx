import {CSSProperties} from "react";
import {render} from "@testing-library/react";
import {add, spaceJump} from "./functionTypes";
import {firstNumber, firstPerson, firstString, grabItemFrom} from "./generics";
import {spaceShipWithoutName, spaceshipThrust} from "./omit";
import {spaceJumpPartial} from "./partials";
import {pickNameAndThrustSpaceShip, spaceshipName} from "./pick";
import {readOnlySpaceShip} from "./readonly";
import {spaceShipRecord} from "./record";
import {optionalSpaceShip, spaceRequiredSpaceShip} from "./required";

//Function Types
console.log(add(1, 2));
console.log(spaceJump("Bob", "Mars", true));

//Generics
console.log(firstNumber);
console.log(firstString);
console.log(firstPerson);

//Omit
console.log(spaceShipWithoutName);
console.log(spaceshipThrust);

//Partials
console.log(spaceJumpPartial({spaceship: "SpaceX-1", location: "Mars", launched: false}));

//Pick
console.log(pickNameAndThrustSpaceShip);
console.log(spaceshipName);
console.log(spaceshipThrust);


//ReadOnlySpaceShip
console.log(readOnlySpaceShip);
//This will not work because the properties are readonly
// readOnlySpaceShip.name = "SpaceX-2";
// readOnlySpaceShip.thrust = 200;

//Record
console.log(spaceShipRecord);
console.log(spaceShipRecord["Space-X"]);

//Optional
console.log(spaceRequiredSpaceShip);
console.log(optionalSpaceShip);


const keyValueMap: any = {
    "Pick": spaceshipName,
    "Required": spaceRequiredSpaceShip,
    "Optional": optionalSpaceShip,
    "Record": spaceShipRecord["Space-X"],
    "ReadOnly": readOnlySpaceShip,
    "Partial": pickNameAndThrustSpaceShip,
    "Omit": spaceShipWithoutName,
    "Function Types 1": add(1, 2),
    "Function Types 2": spaceJump("Bob", "Mars", true),
    "Partials": spaceJumpPartial({spaceship: "SpaceX-1", location: "Mars", launched: false}),
    "Generics 1": firstPerson,
    "Generics 2": firstString,
    "Generics 3": firstNumber,
    "Generics 4": grabItemFrom(["hello", "world"], 1),
}
const customStyle: CSSProperties = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    textAlign: "center",
    padding: "15px",
    margin: "25px",
};

render(<div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "top",
        height: "100vh",
        width: "100vw",
    }}>
    <div
        style={{
            ...customStyle,
            textAlign: "center",
            minWidth: "800px",
        }}><b>Welcome, Ready To Learn TypeScript!</b></div>
    <div>
        <table style={{minWidth: '800px'}}>
            <thead>
            <tr>
                <th>Key</th>
                <th>Implementation</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(keyValueMap).map((key, index) => {
                return <tr key={index} style={
                    {
                        ...customStyle,
                        backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                    }
                }>
                    <td style={customStyle}>{key}</td>
                    <td style={customStyle}>{JSON.stringify(keyValueMap[key])}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
</div>);
