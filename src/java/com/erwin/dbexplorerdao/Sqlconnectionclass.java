/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexplorerdao;

import com.erwin.dbexplorerforms.DbdetailsForm;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Mallick
 */
public class Sqlconnectionclass {
    
    
    public static Connection getOracleConnection(DbdetailsForm details) throws ClassNotFoundException, SQLException{
       
        Connection con=null;
         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        con = DriverManager.getConnection(details.getUrl()+ ";databaseName=" + details.getDbname(), details.getUname(), details.getPassword());
        System.out.println(con);
        return con;  
    }
    
}
