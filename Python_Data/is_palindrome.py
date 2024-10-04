def is_palindrome(phrase):
    """Is phrase a palindrome?"""
    # Remove spaces and convert to lowercase
    cleaned_phrase = ''.join(char.lower() for char in phrase if char.isalnum())
    # Compare the cleaned phrase with its reverse
    return cleaned_phrase == cleaned_phrase[::-1]
