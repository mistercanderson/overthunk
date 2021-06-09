export default function faceSwitch(sentiment) {
  switch (sentiment) {
    case 'positive':
      return '🙂';
    case 'negative':
      return '😕';
    case 'neutral':
      return '😑';
    default:
      return '🧐';
  }
}
