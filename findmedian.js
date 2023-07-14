findMedianSortedArrays([1, 3], [2, 4]);
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedarray = [...nums1, ...nums2];
  mergedarray.sort((a, b) => a - b);
  console.log(mergedarray);
  if (mergedarray.length % 2 === 0) {
    let mid = mergedarray.length / 2;
    return (mergedarray[mid - 1] + mergedarray[mid]) / 2;
  } else {
    let mid = Math.floor(mergedarray.length / 2);
    return mergedarray[mid];
  }
};
