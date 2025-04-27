/**
 * Format a date string to a readable format
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  /**
   * Sort incidents by date
   */
  export const sortByDate = (a, b, ascending = false) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
  
    return ascending ? dateA - dateB : dateB - dateA;
  };
  