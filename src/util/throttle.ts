export const throttleEventPerSessionStorage = (
  eventName: string,
  execute: () => void
) => {
  if (window?.sessionStorage?.getItem(eventName)) {
    //Skip event if it was fired before.
    return;
  }

  execute();
  window?.sessionStorage?.setItem(eventName, "sent");
};
