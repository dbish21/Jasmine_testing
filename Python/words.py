def print_upper_words(words, must_start_with=None):
    """Print each word on a separate line, in uppercase.
    
    If must_start_with is provided, only print words that start
    with one of those letters (case-insensitive).

    For example:
    print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                      must_start_with={"h", "y"})
    
    Should print:
    HELLO
    HEY
    YO
    YES
    """
    
    for word in words:
        if must_start_with is None or word[0].lower() in {letter.lower() for letter in must_start_with}:
            print(word.upper())

# Test the function
print("Test 1: Basic functionality")
print_upper_words(["hello", "world"])

print("\nTest 2: Words starting with 'e' or 'E'")
print_upper_words(["hello", "world", "elephant", "Eagle"], must_start_with={"e"})

print("\nTest 3: Words starting with 'h' or 'y'")
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})