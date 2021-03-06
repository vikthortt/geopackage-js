export enum FeatureDrawType {
  /**
   * Circle for a point
   */
  CIRCLE = 'CIRCLE',
  /**
   * Stroke for a line of polygon
   */
  STROKE = 'STROKE',
  /**
   * Fill for a polygon
   */
  FILL = 'FILL',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FeatureDrawType {
  export function nameFromType(type: FeatureDrawType): string {
    return FeatureDrawType[type];
  }

  export function fromName(type: string): FeatureDrawType {
    return FeatureDrawType[type];
  }
}
