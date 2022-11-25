# Anagram Review
   ```python
   class Solution:
       def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
   ob1 = Solution()
   print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
   ```
* The `groupAnagrams` method definition in `line 2` should have a lower indentation than its inner statements.

* In python, it's generally advised to indent lines using spaces of multiples of four (4, 8, 12, ...) instead of tabs. I recommend checking out the [PEP 8 Style Guide for Python Code](https://peps.python.org/pep-0008/).

* The `sorted()` function in `line 5` takes in an iterable arguement for which it has to sort.

* The use of more descriptive variable names like `sorted_characters` instead of `x` in `line 5` would help improve your code's readability.

* The statements after `line 10` might cause some unwanted side effects when imported from another module. This could be prevented by placing them within an `if __name__ == '__main__':` statement.
