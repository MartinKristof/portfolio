'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings2 } from 'lucide-react';
import { useCookieConsent } from '../contexts/cookie-consent-context';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from '@radix-ui/react-label';
import { Switch } from './ui/switch';

export const CookieConsentDialog = () => {
  const { consent, updateConsent } = useCookieConsent();
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const [preferences, setPreferences] = React.useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const hasAnyConsent = consent?.necessary || consent?.analytics || consent?.marketing;

  React.useEffect(() => {
    if (consent) {
      setPreferences(consent);
    }
  }, [consent]);

  if (hasAnyConsent) {
    return (
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50 rounded-full">
            <Settings2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. Essential cookies cannot be disabled as they are required for the website
              to function.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <CookieOptions preferences={preferences} setPreferences={setPreferences} />
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                updateConsent(preferences);
                setIsDetailOpen(false);
              }}
            >
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <Card className="mx-auto max-w-2xl shadow-lg">
          <CardHeader>
            <CardTitle>Cookie Consent</CardTitle>
            <CardDescription>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              Please select your preferences below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CookieOptions preferences={preferences} setPreferences={setPreferences} />
          </CardContent>
          <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              onClick={() => {
                updateConsent({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                });
              }}
            >
              Essential only
            </Button>
            <Button
              onClick={() => {
                updateConsent({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                });
              }}
            >
              Accept all
            </Button>
            <Button
              onClick={() => {
                updateConsent(preferences);
              }}
            >
              Save preferences
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

const CookieOptions = ({
  preferences,
  setPreferences,
}: {
  preferences: { necessary: boolean; analytics: boolean; marketing: boolean };
  setPreferences: React.Dispatch<
    React.SetStateAction<{
      necessary: boolean;
      analytics: boolean;
      marketing: boolean;
    }>
  >;
}) => (
  <div className="grid gap-6">
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor="necessary" className="flex flex-col space-y-1">
        <span>Essential Cookies</span>
        <span className="font-normal text-sm text-muted-foreground">
          Required for the website to function properly. Cannot be disabled.
        </span>
      </Label>
      <Switch id="necessary" checked disabled />
    </div>
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor="analytics" className="flex flex-col space-y-1">
        <span>Analytics Cookies</span>
        <span className="font-normal text-sm text-muted-foreground">
          Help us understand how visitors interact with our website.
        </span>
      </Label>
      <Switch
        id="analytics"
        checked={preferences.analytics}
        onCheckedChange={checked => setPreferences(prev => ({ ...prev, analytics: checked }))}
      />
    </div>
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor="marketing" className="flex flex-col space-y-1">
        <span>Marketing Cookies</span>
        <span className="font-normal text-sm text-muted-foreground">
          Used to track visitors across websites to display relevant advertisements.
        </span>
      </Label>
      <Switch
        id="marketing"
        checked={preferences.marketing}
        onCheckedChange={checked => setPreferences(prev => ({ ...prev, marketing: checked }))}
      />
    </div>
  </div>
);
