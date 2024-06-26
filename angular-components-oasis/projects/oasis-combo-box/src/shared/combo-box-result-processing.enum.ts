/**
 * Перечисление способов обработки конечного результата
 * При вводе в поле данных, которых нет в списке компонента
 */
export enum ComboBoxResultProcessing {
  /** Без какой-либо обработки */
  None = 0,

  /** Выделение цветом */
  HighlightingColor = 1 << 0,

  /** Очистка значения */
  ClearingValue = 1 << 1,

  /** Замена на предыдущие выбранное значение */
  ReplacementPrevious = 1 << 2
}