/**
 * @memberOf module:extension/style
 * @class StyleMappingDao
 */
import { UserMappingDao } from '../relatedTables/userMappingDao';
import { UserCustomDao } from '../../user/custom/userCustomDao';
import { GeoPackage } from '../../geoPackage';
import { StyleMappingTable } from './styleMappingTable';
import { UserMappingTable } from '../relatedTables/userMappingTable';
import { StyleMappingRow } from './styleMappingRow';
import { UserRow } from '../../user/userRow';
import { DataTypes } from '../../..';
import { ColumnValues } from '../../dao/columnValues';

/**
 * Style Mapping DAO for reading user mapping data tables
 * @extends UserMappingDao
 * @param  {module:user/custom~UserCustomDao} userCustomDao
 * @param  {module:geoPackage~GeoPackage} geoPackage      geopackage object
 * @param {StyleMappingTable} [styleMappingTable]
 * @constructor
 */
export class StyleMappingDao extends UserMappingDao<StyleMappingRow> {
  public table: StyleMappingTable;
  constructor(
    userCustomDao: UserCustomDao<StyleMappingRow>,
    geoPackage: GeoPackage,
    styleMappingTable?: StyleMappingTable,
  ) {
    super(
      userCustomDao,
      geoPackage,
      styleMappingTable || new StyleMappingTable(userCustomDao.table.table_name, userCustomDao.table.columns),
    );
  }
  /**
   * Create a new {module:user/custom~UserCustomTable}
   * @param  {module:user/custom~UserCustomDao} userCustomDao
   * @return {module:user/custom~UserCustomTable} userCustomTable user custom table
   */
  createMappingTable(userCustomDao: UserCustomDao<UserRow>): StyleMappingTable {
    return new StyleMappingTable(userCustomDao.table.table_name, userCustomDao.table.columns);
  }
  /**
   * Create a new {module:extension/style.StyleMappingRow}
   * @return {module:extension/style.StyleMappingRow}
   */
  newRow(): StyleMappingRow {
    return new StyleMappingRow(this.table);
  }
  /**
   * Create a user mapping row
   * @param  {module:db/dataTypes[]} columnTypes  column types
   * @param  {module:dao/columnValues~ColumnValues[]} values values
   * @return {module:extension/style.StyleMappingRow} style mapping row
   */
  newRowWithColumnTypes(columnTypes: { [key: string]: DataTypes }, values: ColumnValues[]): StyleMappingRow {
    return new StyleMappingRow(this.table, columnTypes, values);
  }
  /**
   * Delete by base id and geometry type
   * @param  {Number} baseId base id
   * @param  {String} geometryType geometry type
   * @return {Number} number of deleted rows
   */
  deleteByBaseIdAndGeometryType(baseId: number, geometryType: string): number {
    let where = '';
    where += this.buildWhereWithFieldAndValue(UserMappingTable.COLUMN_BASE_ID, baseId);
    where += ' AND ';
    where += this.buildWhereWithFieldAndValue(StyleMappingTable.COLUMN_GEOMETRY_TYPE_NAME, geometryType);
    const whereArgs = this.buildWhereArgs([baseId, geometryType]);
    return this.deleteWhere(where, whereArgs);
  }
}
