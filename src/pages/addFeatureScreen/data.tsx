import information from "../../assets/icons/information.svg"; //Icons

export const featureCard = [
    {
        title: "What is a Feature Flag?",
        description: "A feature flag is a software development process used to enable or disable functionality remotely without deploying code. New features can be deployed without making them visible to users. Feature flags help decouple deployment from release letting you manage the full lifecycle of a feature.",
        icon: information
    },
    {
        title: "What is a Feature Dependency?",
        description: "Dependecy mapping prevents making mistakes in managing the feature that might not work without other features. ",
        description2: "This ensures people across org can use the tool without causing unexpect behavior or breaking the system",
        icon: information
    },
]



export const packages_cmd = [
    {
        package_title: "a. Use create - react - app to create a new react application.",
        code_cmd: "npx create-react-app hello-react && cd hello react",
    },
    {
        package_title: "b. Install the launchbees SDK:",
        code_cmd: "npm install -- save launchbees-react-client-sdk@1.0",
    },
    {
        package_title: "c. In App.js , import LBimporter",
        code_cmd: "import { withLaunchBes | from ‘ launchbees-react-client-sdk’ import Helloworld from ‘/.nHelloWorld’;",
    },
]