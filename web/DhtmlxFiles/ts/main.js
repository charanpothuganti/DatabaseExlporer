var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var com;
(function (com) {
    var erwin;
    (function (erwin) {
        var dbexplorer;
        (function (dbexplorer) {
            var ParentClass = /** @class */ (function () {
                function ParentClass() {
                    this.creteToolbar();
                    this.createLayout();
                    this.createTree();
                    this.createEditor();
                }
                ParentClass.prototype.creteToolbar = function () {
                    var _this = this;
                    this.toolBar = new dhtmlXToolbarObject("a_toolbar");
                    this.toolBar.setIconsPath('./codebase/skins/web/icons_web');
                    this.toolBar.addText(1, 1, "<b>Data Base Explorer</b>");
                    this.toolBar.addButton("add", 2, "<span style='color:DodgerBlue'>ADD</span>");
                    this.toolBar.addButton("ex", 2, "<span style='color:DodgerBlue'>Excute</span>");
                    this.toolBar.attachEvent("onClick", function (id) {
                        if (id === "add")
                            _this.showForm(id);
                        else
                            console.log(_this.editor.getContent());
                    });
                };
                ParentClass.prototype.createLayout = function () {
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
                };
                ParentClass.prototype.createTree = function () {
                    var _this = this;
                    this.myMenu = new dhtmlXMenuObject();
                    this.myMenu.setIconsPath("./codebase/imgs/dhxmenu_material/");
                    this.myMenu.renderAsContextMenu();
                    this.myMenu.loadStruct("./DhtmlxFiles/ts/Menu.xml");
                    this.myMenu.attachEvent("onClick", function (id) {
                        _this.showForm(id);
                    });
                    this.main_tree = this.main_layout.cells('a').attachTree("t");
                    this.main_tree.setImagePath("./DhtmlxFiles/codebase/imgs/dhxtree_material/");
                    this.main_tree.enableContextMenu(this.myMenu);
                    this.main_tree.load("./DhtmlxFiles/ts/Treedata.xml", "XML");
                    this.main_tree.enableDragAndDrop(true);
                    this.main_tree.enableMercyDrag(true);
                };
                ParentClass.prototype.showForm = function (id) {
                    var _this = this;
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
                    this.myForm.attachEvent("onButtonClick", function (id) {
                        if (id === "submit") {
                            _this.window2.close();
                            _this.getFormDataM(_this.myForm);
                        }
                        else
                            _this.myForm.clear();
                    });
                };
                ParentClass.prototype.getFormDataM = function (form) {
                    console.log(form);
                };
                ParentClass.prototype.createEditor = function () {
                    this.editor = this.main_layout.cells('b').attachEditor();
                    this.editor.cell.cell.firstChild.style.display = 'none';
                    console.log(this.editor);
                };
                return ParentClass;
            }());
            dbexplorer.ParentClass = ParentClass;
            var ChildClass = /** @class */ (function (_super) {
                __extends(ChildClass, _super);
                function ChildClass() {
                    return _super.call(this) || this;
                }
                return ChildClass;
            }(ParentClass));
            dbexplorer.ChildClass = ChildClass;
        })(dbexplorer = erwin.dbexplorer || (erwin.dbexplorer = {}));
    })(erwin = com.erwin || (com.erwin = {}));
})(com || (com = {}));
