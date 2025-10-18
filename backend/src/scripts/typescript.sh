cd '../';
result="$(npm tsc)"
if [ $? -eq 0 ]; then
    echo "TypeScript compilation succeeded."
else
    echo "TypeScript compilation failed:"
    echo "$result"
    exit 1
fi