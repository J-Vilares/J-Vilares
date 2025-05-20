const organizationName = "J-Vilares";
const projectName = "J-Vilares.github.io";

module.exports = {
title: "J-Vilares Repo", // <-- Add this line
url: `https://${organizationName}.github.io`,
baseUrl: `/${projectName}/`,
organizationName,
projectName,
presets: [
[
"classic",
{
docs: {
editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
},
blog: {
editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
},
},
],
],
};