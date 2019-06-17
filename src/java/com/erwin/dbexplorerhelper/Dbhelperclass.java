/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexplorerhelper;

import com.erwin.dbexplorerdao.DaoOperation;
import com.erwin.dbexplorerdao.Sqlconnectionclass;
import com.erwin.dbexplorerforms.DbdetailsForm;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

/**
 *
 * @author Mallick
 */
public class Dbhelperclass {

    public static List<TableMetaData> setDbdatahelper(DbdetailsForm cf,String dbtype) throws ClassNotFoundException, SQLException, IOException {
      
        
           Connection con= Sqlconnectionclass.getOracleConnection(cf);
           List<TableMetaData> l=DaoOperation.getTableMetaData(con);
           System.out.println("helper");
           
            
//        }
//        else{
//            
//        }
        return l;
        
        
        
        
    }

    public static List<TableMetaData> getCloumsHelper(String tbname) throws SQLException {
        
        List<TableMetaData> l=DaoOperation.getColumDao(tbname);
     
        return l;
    }
    
    
    
    
}
