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
    constructor() {
      this.creteToolbar();
      this.createLayout();
      this.createTree();
      this.createEditor();
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
        this.showForm(id);

      });
      this.main_tree = this.main_layout.cells('a').attachTree("t");
      this.main_tree.setImagePath("./DhtmlxFiles/codebase/imgs/dhxtree_material/");
      this.main_tree.enableContextMenu(this.myMenu);
      this.main_tree.load("./DhtmlxFiles/ts/Treedata.xml", "XML");
      this.main_tree.enableDragAndDrop(true);
      this.main_tree.enableMercyDrag(true);
    }
    public showForm(id: any): any {
      this.formData = [{ type: "settings", position: "label-top" },
      {
        type: "fieldset", name: "empForm", label: id.toUpperCase() + "   DataBase Details", list: [
          { type: "input", name: 'url', label: 'Url', required: true },
          { type: "input", name: 'dbname', label: 'DataBase Name', required: true },
          { type: "input", name: 'uname', label: 'UserName', required: true },
          { type: "input", name: 'pswd', label: 'Password', required: true },
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
      console.log(this.myForm);
      this.myForm.enableLiveValidation(true);
      this.myForm.attachEvent("onButtonClick", (id) => {
        if (id === "submit") {
          this.window2.close();
          this.getFormDataM(this.myForm);
        }
        else
          this.myForm.clear();
      });



    }
    public getFormDataM(form: any): any {

      console.log(form);




    }
    public createEditor(): any {
      this.editor = this.main_layout.cells('b').attachEditor();
      this.editor.cell.cell.firstChild.style.display = 'none'
      console.log(this.editor);


    }

    //   public CreateTree(): any {
    //   this.myMenu = new dhtmlXMenuObject();
    //   this.myMenu.setIconsPath("./codebase/imgs/dhxmenu_material/");
    //   this.myMenu.renderAsContextMenu();
    //   this.myMenu.loadStruct("Menu.xml");
    //   this.myMenu.attachEvent("onClick", (id: any) => {
    //     if (id == "add") {
    //       this.showForm(id);
    //     } else if (id == "delete") {
    //       this.main_tree.deleteItem(this.seletedId, true);
    //     }
    //     else {
    //       this.showForm(id);
    //     }
    //   });
    //   this.main_tree = this.main_layout.cells('a').attachTree(0);
    //   this.main_tree.setImagePath("./codebase/imgs/dhxtree_material/");
    //   this.main_tree.enableContextMenu(this.myMenu);
    //   this.main_tree.load("Data.xml");
    //   this.main_tree.enableDragAndDrop(true);
    //   this.main_tree.enableMercyDrag(true);
    //   this.main_tree.attachEvent("onRightClick", (pid: any) => {
    //     this.seletedId = pid;
    //     this.showMenu(pid);
    //   });
    //
    // }

  }
  export class ChildClass extends ParentClass {
    constructor() {
      super();
    }
  }
}
