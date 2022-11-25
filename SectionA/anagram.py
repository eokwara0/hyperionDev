# class Solution:
#        # R: groupAnagrams method definition should have a lower indentation than its inner statements
#        def groupAnagrams(self, strs):
#       result = {}
#       for i in strs:
#          x = "".join(sorted())  # R: the sorted function takes in an iterable argument that is to be sorted
#          if x in result:
#             result[x].append(i)
#          else:
#             result[x] = [i]
#       return list(result.values())

# # R: statements below might cause unwanted side effects when imported, thus one 
# ob1 = Solution()
# print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


# Below is the same code but with minor corrections and following the pep8 guidelines.
class Solution:
    def groupAnagrams(self, strs):
        result = {}
        for i in strs:
            x = "".join(sorted(i))
            if x in result:
                result[x].append(i)
            else:
                result[x] = [i]
        return list(result.values())


if __name__ == "__main__":
    ob1 = Solution()
    print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
