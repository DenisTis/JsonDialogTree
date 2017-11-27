//Use AJV Scheme to build a template
//build a tool to edit dialogues
//create a new npm package for it
//Here we should load our dialogs json model
//Most probably an API would be required to edit dialogue files
//Probably a different component should be responsible for it.
//model structure:
let object = {
    id: "dialogPositionId", //not optional
    //Probably there is just a scene description, no dialog characters exist
    description: "i18n.descriptionId", //if exists. Check how can be multiline object
    person: {
        image: "assets path", //if exists
        name: "i18n.personId"
    },
    personText: "i18n. Person text",
    // could be choices: which could contain array (if only one possible answer exists, still should be in array)
    reply: [ //optional (if not provided, dialog has to be closed)
        {
            text: "i18n.description", //not optional,
            //If character can see it at all
            displayCondition: "condition as property.abc > 20",
            //probably replace by condition using property of a single string like (strength > 50 or money >300)
            //find out how to evaluate such conditions
            //if property is not found, condition is thought to be failed
            //use ternary operation for condition evaluation
            //If character will be able to achieve what he wants
            next: [{
                nextId: "dialogPositionId", //not optional,
                saveSelection: "true", //if it is needed to be passed to interface after dialog close
                achievement: "i18n.descriptionId", //Inform user if he got or lost something
                conditionalNext: { //optional object /array
                    condition: "condition as property.abc > 20", //not optional
                    successNextId: "dialogPositionId" //not optional,
                }
            }]
        },
        {
            //Minimum parameters
            text: "i18n.description", //not optional,
            //If character will be able to achieve what he wants
            next: [{
                nextId: "dialogPositionId" //not optional
            }]
        },
    ]
}