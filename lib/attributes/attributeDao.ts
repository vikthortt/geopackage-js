/**
 * @module attributes/attributeDao
 */
import { UserDao } from '../user/userDao';
import { GeoPackage } from '../geoPackage';
import { AttributeTable } from './attributeTable';
import { AttributeRow } from './attributeRow';
import { Contents } from '../core/contents/contents';
import { DataTypes } from '../..';
import { ColumnValues } from '../dao/columnValues';
/**
 * Attribute DAO for reading attribute user data tables
 * @class AttributeDao
 * @extends UserDao
 * @param  {module:geoPackage~GeoPackage} geoPackage              geopackage object
 * @param  {module:attributes/attributeTable~AttributeTable} table           attribute table
 */
export class AttributeDao<T extends AttributeRow> extends UserDao<AttributeRow> {
  /**
   * Contents of this AttributeDao
   * @member {module:core/contents~Contents}
   */
  contents: Contents;

  constructor(geoPackage: GeoPackage, public table: AttributeTable) {
    super(geoPackage, table);
    if (!table.contents) {
      throw new Error('Attributes table has null Contents');
    }

    this.contents = table.contents;
  }

  /**
   * Create a new attribute row with the column types and values
   * @param  {Array} columnTypes column types
   * @param  {module:dao/columnValues~ColumnValues[]} values      values
   * @return {module:attributes/attributeRow~AttributeRow}             attribute row
   */
  newRowWithColumnTypes(columnTypes: { [key: string]: DataTypes }, values: ColumnValues[]): AttributeRow {
    return new AttributeRow(this.table, columnTypes, values);
  }

  /**
   * Create a new attribute row
   * @return {module:attributes/attributeRow~AttributeRow} attribute row
   */
  newRow(): AttributeRow {
    return new AttributeRow(this.table);
  }
}
