/**
 * @memberOf module:extension/style
 * @class StyleTableReader
 */
import { AttributeTableReader } from '../../attributes/attributeTableReader';
import { StyleTable } from './styleTable';
import { UserColumn } from '../../user/userColumn';

/**
 * Reads the metadata from an existing attribute table
 * @extends {AttributeTableReader}
 * @constructor
 */
export class StyleTableReader extends AttributeTableReader {
  /**
   *
   * @param {String} tableName
   * @param columns
   * @returns {module:extension/style.StyleTable}
   */
  createTable(tableName: string, columns: UserColumn[]): StyleTable {
    return new StyleTable(tableName, columns);
  }
}
