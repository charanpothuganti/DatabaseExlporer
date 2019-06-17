/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwin.dbexplorerdao;

import com.erwin.dbexplorerhelper.TableMetaData;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Mallick
 */
public class DaoOperation {

    static Connection conn = null;

    static public List<TableMetaData> getTableMetaData(Connection con) throws ClassNotFoundException, SQLException, IOException {
        conn = con;
        DatabaseMetaData dmd = null;
        dmd = con.getMetaData();
        String table[] = {"TABLE"};
        ResultSet rs = null;
        ArrayList<TableMetaData> tables = null;
        rs = dmd.getTables(null, null, null, table);
        tables = new ArrayList<TableMetaData>();
        String c[] = null;
        while (rs.next()) {
            TableMetaData t = new TableMetaData();
            t.setTbname(rs.getString("TABLE_NAME"));
            tables.add(t);
        }
        return tables;

    }

    public static List<TableMetaData> getColumDao(String tbname) throws SQLException {

        PreparedStatement ps = conn.prepareStatement("select * from "+tbname);
        ResultSet rs = ps.executeQuery();
        List<TableMetaData> l=new ArrayList<>();
        ResultSetMetaData rsmd = rs.getMetaData();
        for (int i = 1; i <= rsmd.getColumnCount(); i++) {
            TableMetaData t=new TableMetaData();
            t.setColumnname(rsmd.getColumnName(i));
            l.add(t);  
        }
        return l;
    }
}
