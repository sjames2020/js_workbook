//runs.
// the result of -1 ||= -1, truthy
if (-1 || 0) alert ('first' );

// executes
// oprator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain :
// null || -1 && 1 -> null || 1 -> 1
if (null || -1 && 1) alert( 'third' );

