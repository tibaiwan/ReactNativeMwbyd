// km
export const formatDistance = (distance) => {
    if (!distance) return '--m';
    if (distance < 1) {
        return (distance * 1000).toFixed(0) + 'm';
    } else {
        return parseFloat(distance.toFixed(2)) + 'km';
    }
}
