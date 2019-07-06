export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
 export  interface Action<T> {
    type: any;
    payload: T ;
 }
