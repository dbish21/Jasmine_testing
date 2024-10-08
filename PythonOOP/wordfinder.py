"""Word Finder: finds random words from a dictionary."""


import random

class WordFinder:
    """Find random words from a dictionary.

    >>> wf = WordFinder("words.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, path):
        """Read dictionary and reports # items read."""
        file = open(path)
        self.words = self.parse(file)
        file.close()
        print(f"{len(self.words)} words read")

    def parse(self, file):
        """Parse file -> list of words."""
        return [w.strip() for w in file]

    def random(self):
        """Return random word."""
        return random.choice(self.words)
    
class SpecialWordFinder(WordFinder):

    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """

    def parse(self, dict_file):
        """Parse dict_file -> list of words, skipping blanks/comments."""

        return [w.strip() for w in dict_file
                if w.strip() and not w.startswith("#")]

# If you want to run the doctests, uncomment the following:
# if __name__ == "__main__":
#     import doctest
#     doctest.testmod()