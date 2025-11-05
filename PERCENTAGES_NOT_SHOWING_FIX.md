# Percentages Not Showing - Quick Fix

## 🔍 Problem
The Percentages topic (💯) is not appearing in the Extra Exercises section.

## ✅ Verified
- ✅ Code is correct
- ✅ Import is correct (`extra-exercises-new.ts`)
- ✅ Export is correct (`percentagesExercises`)
- ✅ No TypeScript errors
- ✅ Build is successful

## 🔧 Solution: Restart Dev Server

The issue is likely that the dev server needs to be restarted to pick up the new files.

### Step 1: Stop Current Server
If the dev server is running, stop it:
- Press `Ctrl + C` in the terminal
- Or close the terminal window

### Step 2: Clear Cache (Optional but Recommended)
```bash
# Delete node_modules/.vite folder
rmdir /s /q node_modules\.vite

# Or on PowerShell:
Remove-Item -Recurse -Force node_modules\.vite
```

### Step 3: Restart Dev Server
```bash
npm run dev
```

### Step 4: Hard Refresh Browser
After the server starts:
1. Open the application in browser
2. Press `Ctrl + Shift + R` (hard refresh)
3. Or `Ctrl + F5`
4. Or clear browser cache

## 🧪 Verification Steps

After restarting, you should see:

### 1. In Terminal
```
VITE v5.4.20  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 2. In Browser
Navigate to "Extra Exercises" and you should see:

```
💯 Percentages          (NEW!)
   100 exercises available
   [Have a go →]

🔢 Ratios & Proportions
   XX exercises available
   [Have a go →]

... (other topics)
```

### 3. Click on Percentages
You should see 100 exercises organized by difficulty:
- Easy: 35 exercises
- Medium: 45 exercises
- Hard: 20 exercises

## 🐛 If Still Not Showing

### Check 1: Verify Files Exist
```bash
# Check if percentages-exercises.ts exists
dir src\data\percentages-exercises.ts

# Should show: percentages-exercises.ts (57,906 bytes)
```

### Check 2: Verify Import in extra-exercises-new.ts
Open `src/data/extra-exercises-new.ts` and check line 1:
```typescript
import { percentagesExercises } from './percentages-exercises';
```

### Check 3: Verify Export in percentages-exercises.ts
Open `src/data/percentages-exercises.ts` and check line 10:
```typescript
export const percentagesExercises: ExtraExercise[] = [
```

### Check 4: Verify Spread in extra-exercises-new.ts
Check around line 35:
```typescript
export const extraExercises: ExtraExercise[] = [
  // PERCENTAGES UNIT - 100 exercises (IDs 1001-1100)
  ...percentagesExercises,
  
  // OTHER UNITS START HERE
```

### Check 5: Console Errors
Open browser console (F12) and check for errors:
- Red errors indicate problems
- Look for "Cannot find module" or "Import error"

## 🔄 Alternative: Full Clean Restart

If the above doesn't work, try a full clean restart:

```bash
# 1. Stop dev server (Ctrl+C)

# 2. Delete node_modules and dist
rmdir /s /q node_modules
rmdir /s /q dist

# 3. Reinstall dependencies
npm install

# 4. Rebuild
npm run build

# 5. Start dev server
npm run dev
```

## 📊 Expected Result

After successful restart, you should see:

### Extra Exercises Page
```
┌─────────────────────────────────────┐
│ 💯 Percentages                      │
│ 100 exercises available             │
│ Easy • Medium • Hard                │
│ [Have a go →]                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 🔢 Ratios & Proportions             │
│ XX exercises available              │
│ [Have a go →]                       │
└─────────────────────────────────────┘

... (other topics)
```

### Percentages Topic Page
When you click "Have a go →" on Percentages:

```
Percentages - 100 Exercises

Section 1: Fractions and Percentages (20)
├─ Convert 50% to a Fraction (Easy)
├─ Convert 25% to a Fraction (Easy)
├─ Convert 10% to a Fraction (Easy)
└─ ... (17 more)

Section 2: Percentage of a Quantity (20)
├─ 10% of £80 (Easy)
├─ 50% of 60 kg (Easy)
└─ ... (18 more)

... (4 more sections)
```

## 🎯 Quick Test

To verify Percentages is working:

1. **Navigate**: Extra Exercises → Percentages
2. **Select**: "Convert 50% to a Fraction"
3. **Answer**: Type "1/2"
4. **Submit**: Click "Submit Answer"
5. **Result**: Should show ✅ "Correct! Well done!"

## 📝 Common Issues

### Issue 1: "Cannot find module './percentages-exercises'"
**Solution**: File doesn't exist or wrong path
```bash
# Verify file exists
dir src\data\percentages-exercises.ts
```

### Issue 2: "percentagesExercises is not defined"
**Solution**: Export is missing or incorrect
- Check `export const percentagesExercises` in percentages-exercises.ts

### Issue 3: "Unexpected token"
**Solution**: Syntax error in TypeScript
```bash
# Check for errors
npm run build
```

### Issue 4: Old version cached
**Solution**: Clear browser cache
- Press `Ctrl + Shift + Delete`
- Select "Cached images and files"
- Click "Clear data"

## 🚀 Final Steps

1. ✅ Stop dev server
2. ✅ Clear Vite cache: `Remove-Item -Recurse -Force node_modules\.vite`
3. ✅ Restart: `npm run dev`
4. ✅ Hard refresh browser: `Ctrl + Shift + R`
5. ✅ Navigate to Extra Exercises
6. ✅ Look for 💯 Percentages

## 📞 Still Having Issues?

If Percentages still doesn't show after all these steps:

1. **Check Git Status**
   ```bash
   git status
   ```
   Make sure all files are committed

2. **Pull Latest Changes**
   ```bash
   git pull origin main
   ```

3. **Verify Commit**
   ```bash
   git log --oneline -5
   ```
   Should show: "feat: Add complete Percentages unit..."

4. **Check File Size**
   ```bash
   dir src\data\percentages-exercises.ts
   ```
   Should be ~58 KB

## ✅ Success Indicators

You'll know it's working when:
- ✅ 💯 icon appears in Extra Exercises
- ✅ "Percentages" topic is listed first
- ✅ Shows "100 exercises available"
- ✅ Can click and see all 100 exercises
- ✅ Can complete exercises and get AI feedback

---

**Most Common Solution**: Just restart the dev server with `npm run dev` and hard refresh the browser! 🎉
