declare var dhtmlXToolbarObject: any;
declare var dhtmlXGridObject: any;
declare var dhtmlXLayoutObject: any;
declare var dhtmlXForm: any
declare var dhtmlx: any;
declare var dhx: any;
declare var dhtmlXSideBar: any;
declare var dhtmlXMenuObject: any;
declare var dhx: any;
declare var dhtmlXWindows: any;
declare var formobj_submit: any;
module com.erwin.dbexplorer {
  export class ParentClass {


    public main_layout: any;
    // public main_layout: any;

    public childId: any;
    public parentId: any;
    public toolBar: any;
    public myGrid: any;
    public json: any;
    public formWin: any;
    public selectedId: any;
    public window2: any;
    public myForm: any;
    public mySidebar: any;
    public main_tree: any;
    public myMenu: any;
    public formData: any;
    public editor: any;
    public url: any;
    constructor() {
      this.creteToolbar();
      this.createLayout();
      this.createTree();
      this.createEditor();
    }
    public test() {
      console.log("hell");
    }
    creteToolbar() {
      this.toolBar = new dhtmlXToolbarObject("a_toolbar")
      this.toolBar.setIconsPath('./codebase/skins/web/icons_web');
      this.toolBar.addText(1, 1, "<b>Data Base Explorer</b>");
      this.toolBar.addButton("add", 2, "<span style='color:DodgerBlue'>ADD</span>");
      this.toolBar.addButton("ex", 2, "<span style='color:DodgerBlue'>Excute</span>");
      this.toolBar.attachEvent("onClick", (id) => {
        if (id === "add")
          this.showForm(id);
        else
          console.log(this.editor.getContent());
      })
    }
    public createLayout(): any {
      this.main_layout = new dhtmlXLayoutObject("layout", "4H");
      this.main_layout.cells('a').setText("Connections");
      this.main_layout.cells('a').hideArrow();
      this.main_layout.cells('b').hideArrow();
      this.main_layout.cells('c').hideArrow();
      this.main_layout.cells("b").hideHeader();
      this.main_layout.cells("a").hideHeader();
      this.main_layout.cells("c").hideHeader();
      this.main_layout.cells("d").hideHeader();
      this.main_layout.cells('a').setWidth(300);
      this.main_layout.cells('b').setHeight(216);
      this.main_layout.cells('b').setWidth(800);
      this.main_layout.cells('c').setWidth(800);
    }
    public createTree(): any {
      this.myMenu = new dhtmlXMenuObject();
      this.myMenu.setIconsPath("./codebase/imgs/dhxmenu_material/");
      this.myMenu.renderAsContextMenu();
      this.myMenu.loadStruct("./DhtmlxFiles/ts/Menu.xml");
      this.myMenu.attachEvent("onClick", (id: any) => {
        this.showForm();
      });
      this.main_tree = this.main_layout.cells('a').attachTree("t");
      this.main_tree.setImagePath("./DhtmlxFiles/codebase/imgs/dhxtree_material/");
      this.main_tree.enableContextMenu(this.myMenu);
      this.main_tree.load("./DhtmlxFiles/ts/Treedata.xml", "XML");
      this.main_tree.setXMLAutoLoading("./DhtmlxFiles/ts/Treedata.xml");
      this.main_tree.enableDragAndDrop(true);
      this.main_tree.enableMercyDrag(true);
      this.main_tree.attachEvent("onRightClick", (id, ind, obj) => {
        this.selectedId = id;
        if (id === "sqls") {
          this.url = "jdbc:sqlserver://localhost:1433";
        }

        else {
          this.url = "oracle.jdbc.driver.OracleDriver";
        }

        if (this.selectedId === "con" || (id !== "sqls") && (id !== "oracle")) {

          if ((id !== "sqls") && (id !== "oracle"))
            this.myMenu.hideItem("add");
          this.getColname(id);
        }
        else {
          this.myMenu.showItem("add");
        }
      });
    }
    public getColname(id: any): any {
      this.main_tree.load("dbactionclass.do?action=getColumMetaData&tbname=" + id, "XML");
    }
    public showForm(): any {
      this.formData = [{ type: "settings", position: "label-top" },
      {
        type: "fieldset", name: "empForm", label: this.selectedId.toUpperCase() + "   DataBase Details", list: [
          { type: "input", name: 'url', value: this.url, label: 'Url', required: true },
          { type: "input", name: 'dbname', label: 'DataBase Name', required: true },
          { type: "input", name: 'uname', label: 'UserName', required: true },
          { type: "input", name: 'password', label: 'Password', required: true },
          { type: "hidden", name: 'dbtype', value: this.selectedId },
          { type: "button", name: "submit", width: 75, offsetTop: 10, value: "ADD" },
          { type: "button", name: "reset", width: 75, offsetTop: 10, value: "RESET" }
        ]
      }
      ];
      this.formWin = new dhtmlXWindows();
      this.formWin.attachViewportTo("winVP");
      this.window2 = this.formWin.createWindow("w1", 0, 0, 400, 400);
      this.window2.centerOnScreen();
      this.myForm = this.window2.attachForm(this.formData);
      // console.log(this.window2.myForm);
      this.myForm.enableLiveValidation(true);
      this.myForm.attachEvent("onButtonClick", (id) => {
        if (id === "submit") {
          this.sendFormData();

        }
        else
          this.myForm.clear();
      });

    }
    public sendFormData(): any {
      this.myForm.send("dbactionclass.do?action=getConnection", "POST", (loader: any, response: any) => {
        if (response.trim() == "true") {
          this.insertDataToTree(this.myForm.getItemValue("dbname"));
          this.main_tree.load("dbactionclass.do?action=getTableMetaData", "XML");
          this.window2.close();
          this.succMessage("Connection Successfull");
          // this.loadGrid();
        }
        else if (response.trim() == "false") {
          this.warningMasg("Connection failed");
        }
        else {
          dhtmlx.alert("NetWork Error !");
        }
      });
    }


    public insertDataToTree(name: any) {
      this.main_tree.insertNewChild(this.selectedId, name, name);
    }

    public createEditor(): any {
      this.editor = this.main_layout.cells('b').attachEditor();
      this.editor.cell.cell.firstChild.style.display = 'none'
      console.log(this.editor);

    }
    public succMessage(Masg: String): any {
      dhtmlx.alert({
        type: "successful",
        text: Masg,
        title: "success",
      });
    }
    public warningMasg(Masg: String): any {
      dhtmlx.alert({
        type: "alert-error",
        text: Masg,
        title: "Error!",
        ok: "Okay"
      });
    }
  }
  export class ChildClass extends ParentClass {
    constructor() {
      super();
    }
  }
}
