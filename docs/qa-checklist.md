# Production QA Checklist

## 1. Technical Quality
- [ ] `npm run build` exits 0 with zero TypeScript errors
- [ ] Direct navigation to all 23 routes resolves properly
- [ ] No browser console errors on any route
- [ ] Assets load cleanly with graceful fallbacks

## 2. Brand & Content Integrity
- [ ] Zero Tata Motors car models or references anywhere in codebase
- [ ] 100% verified Hero MotoCorp motorcycle and scooter lineups
- [ ] Accurate 5-year warranty terms (70k km bikes, 50k km scooters)
- [ ] Kosmo Dealership Managing Director Mr. Raghav Ahuja message intact
- [ ] All 4 branch addresses (Jalandhar, Ludhiana, Dasuya, Hoshiarpur) and GM contacts verified

## 3. Functionality & Responsiveness
- [ ] Test ride form validates 10-digit mobile number and offers WhatsApp trigger
- [ ] Service booking form generates reference token and WhatsApp message
- [ ] EMI calculator dynamically recalculates monthly payments
- [ ] Desktop navigation mega-menu functions smoothly
- [ ] Mobile drawer menu toggles and navigates without layout jumps
