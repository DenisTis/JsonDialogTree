export default class DialogContext {
    constructor() {
        this.dialogItems = [];
        this.addItem("First item");
        this.addItem("Second item");
    }
    addItem(item) {
        let newItem = {
            content: item,
            isEdit: false,
            isSelected: true,
            key: this.dialogItems.length
        };
        this.dialogItems.push(newItem);
        this.changeItemMode(this.dialogItems.length - 1);
        this.setSelectedItem(this.dialogItems.length - 1);
    }

    updateItem(key, content) {
        this.dialogItems[key].content = content;
    }

    setSelectedItem(key) {
        for (let i = 0; i < this.dialogItems.length; i++) {
            if (i === key) {
                this.dialogItems[i].isSelected = true;
                continue;
            }
            this.dialogItems[i].isSelected = false;
        }        
    }

    deleteItem(key) {
        this.dialogItems.splice(key, 1);
    }

    changeItemMode(key) {
        if (this.dialogItems[key].isEdit === true) {
            this.dialogItems[key].isEdit = false;
            return;
        }
        //check through all in case other items were selected as editable before
        for (let i = 0; i < this.dialogItems.length; i++) {
            if (i === key) {
                this.dialogItems[i].isEdit = true;
                continue;
            }
            this.dialogItems[i].isEdit = false;
        }

    }

    getItems() {
        for (let i = 0; i < this.dialogItems.length; i++) {
            this.dialogItems[i].key = i;
        }
        return this.dialogItems;
    }
}