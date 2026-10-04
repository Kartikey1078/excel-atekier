let lockCount = 0;

export function setBodyScrollLock(locked: boolean) {
  if (locked) {
    lockCount += 1;
    document.body.style.overflow = "hidden";
    return;
  }

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = "";
  }
}
