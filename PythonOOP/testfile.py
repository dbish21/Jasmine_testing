from wordfinder import WordFinder
import unittest

class TestWordFinder(unittest.TestCase):
    def setUp(self):
        self.wf = WordFinder("words.txt")
        with open("words.txt", "r") as f:
            self.words = set(word.strip() for word in f)

    def test_random_word(self):
        word = self.wf.random()
        self.assertIn(word, self.words)

    def test_all_words_possible(self):
        found_words = set()
        for _ in range(len(self.words) * 10):  # Try 10 times the number of words
            found_words.add(self.wf.random())
        self.assertEqual(found_words, self.words)

if __name__ == "__main__":
    unittest.main()