import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

/**
 * Similar to lodash _.get. Get a object param based on string path
 * @param {Object} obj
 * @param {String} path
 * @param {Any} defaultValue
 */
function get(obj, path, defaultValue) {
  return path
    .split(".")
    .reduce((a, c) => (a && a[c] ? a[c] : defaultValue || null), obj);
}

/**
 * Hook for access to some specific attribute in style theme
 * @param {String} query example: 'colors.blue'
 * @param {Any} defaultValue
 */
function useTheme(query = "", defaultValue = null) {
  const localTheme = useContext(ThemeContext);
  return get(localTheme, query, defaultValue);
}

export default useTheme;
