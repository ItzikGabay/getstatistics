const a = [1, 3, 4, 6, 7, 8, 10, 13, 15]
let tree = {}
createBalanceTree(tree, a, 0, a.length-1)
function createBalanceTree(node, arr, startIndex, endIndex) {
    var middle = Math.floor((startIndex + endIndex) / 2)
    node.v = arr[middle]
    if ((middle - 1) >= startIndex){
        node.l = {}
        createBalanceTree(node.l, arr, startIndex, middle - 1)
    }
    if (endIndex >= (middle + 1)){
        node.r = {}
        createBalanceTree(node.r, arr, middle + 1, endIndex)
    }
    console.log(treeify.asTree(node, true))
}