/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexplorerhelper;

/**
 *
 * @author Mallick
 */
public class TableMetaData {
    
    String tbname;
    String columnname;

    @Override
    public String toString() {
        return "TableMetaData{" + "tbname=" + tbname + ", columnname=" + columnname + '}';
    }

    public String getColumnname() {
        return columnname;
    }

    public void setColumnname(String columnname) {
        this.columnname = columnname;
    }

   

    public String getTbname() {
        return tbname;
    }

    public void setTbname(String tbname) {
        this.tbname = tbname;
    }

   

  
}
