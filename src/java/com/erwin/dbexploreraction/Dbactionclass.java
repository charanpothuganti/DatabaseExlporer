/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexploreraction;

import com.erwin.dbexplorerforms.DbdetailsForm;
import com.erwin.dbexplorerhelper.Dbhelperclass;
import com.erwin.dbexplorerhelper.TableMetaData;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

/**
 *
 * @author Mallick
 */
public class Dbactionclass extends DispatchAction {

    public ActionForward getConnection(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException, SQLException, IOException {
        request.setAttribute("succss", true);
        return mapping.findForward("showResult");
    }

    public ActionForward getTableMetaData(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException, SQLException, IOException {
        DbdetailsForm cf = (DbdetailsForm) form;
        System.out.println(cf.getDbname() + " ll" + cf);
        List<TableMetaData> l = Dbhelperclass.setDbdatahelper(cf, cf.getDbtype());
        request.setAttribute("dblist", l);
        request.setAttribute("dbname", cf.getDbname());
        return mapping.findForward("dbmetadata");
    }

    public ActionForward getColumMetaData(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException, SQLException, IOException {

        String tbname=request.getParameter("tbname");
        List<TableMetaData> l=Dbhelperclass.getCloumsHelper(tbname);
         request.setAttribute("dblist", l);
        request.setAttribute("tname", tbname);        
         return mapping.findForward("tmetadata");
    }
}
