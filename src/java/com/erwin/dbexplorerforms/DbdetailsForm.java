/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexplorerforms;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionServlet;
import org.apache.struts.upload.MultipartRequestHandler;

/**
 *
 * @author Mallick
 */
public class DbdetailsForm extends ActionForm {

    String url;
    String dbname;
    String uname;
    String password;
    String dbtype;

    public String getDbtype() {
        return dbtype;
    }

    public void setDbtype(String dbtype) {
        this.dbtype = dbtype;
    }

    public ActionServlet getServlet() {
        return servlet;
    }

    public void setServlet(ActionServlet servlet) {
        this.servlet = servlet;
    }

    public MultipartRequestHandler getMultipartRequestHandler() {
        return multipartRequestHandler;
    }

    public void setMultipartRequestHandler(MultipartRequestHandler multipartRequestHandler) {
        this.multipartRequestHandler = multipartRequestHandler;
    }
    
    public DbdetailsForm(){
        
    }

    @Override
    public String toString() {
        return "DbdetailsForm{" + "url=" + url + ", dbname=" + dbname + ", uname=" + uname + ", password=" + password + '}';
    }

    public DbdetailsForm(String url, String dbname, String uname, String password) {
        this.url = url;
        this.dbname = dbname;
        this.uname = uname;
        this.password = password;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDbname() {
        return dbname;
    }

    public void setDbname(String dbname) {
        this.dbname = dbname;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
