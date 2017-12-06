export default class DialogContext {
  constructor() {
    this.dialogItems = [];
    this.addItem("First item");
    this.addItem("Second item");
  }
  addItem(item) {
    let newItem = {
      content: item,
      messages: [{ textId: "Introduction. Monday 09:00", key: 0 }],
      choices: [],
      evaluations: [],
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

  getSelectedKey() {
    for (let i = 0; i < this.dialogItems.length; i++) {
      if (this.dialogItems[i].isSelected === true) {
        return i;
      }
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

  getMessages() {
    let selectedKey = this.getSelectedKey();
    if (selectedKey) {
      return this.dialogItems[selectedKey].messages;
    }
    return [];
  }

  addMessage() {
    let selectedKey = this.getSelectedKey();
    if (selectedKey) {
      let newKey = this.dialogItems[selectedKey].messages.length;
      this.dialogItems[selectedKey].messages.push({ textId: "", key: newKey });
    }
  }

  resetMessageKeys() {
    let selectedKey = this.getSelectedKey();
    if (selectedKey) {
      for (let i = 0; i < this.dialogItems[selectedKey].messages.length; i++) {
        this.dialogItems[selectedKey].messages[i].key = i;
      }
    }
  }

  deleteMessage(key) {
    let selectedKey = this.getSelectedKey();
    if (selectedKey) {
      this.dialogItems[selectedKey].messages.splice(key, 1);
      this.resetMessageKeys();
    }
  }
}
